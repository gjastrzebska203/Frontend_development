"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const addNewNote = Yup.object().shape({
  tacticName: Yup.string()
    .min(5, "Tactic name must be at least 5 characters")
    .max(50, "Tactic name must be at most 50 characters")
    .required("Tactic name is required"),
  strategy: Yup.string()
    .min(5, "Strategy must be at least 5 characters")
    .max(50, "Strategy must be at most 50 characters")
    .required("Strategy is required"),
  effectiveness: Yup.number().required("Effectiveness is required"),
  conditions: Yup.string()
    .min(10, "Conditions must be at least 10 characters")
    .required("Conditions are required"),
  opponents: Yup.string()
    .min(3, "Opponents must be at least 3 characters")
    .required("Opponents are required"),
  trainingDate: Yup.date().required("Training date is required"),
});

const updateNote = Yup.object().shape({
  tacticName: Yup.string()
    .min(5, "Tactic name must be at least 5 characters")
    .max(50, "Tactic name must be at most 50 characters"),
  strategy: Yup.string()
    .min(5, "Strategy must be at least 5 characters")
    .max(50, "Strategy must be at most 50 characters"),
  conditions: Yup.string().min(10, "Conditions must be at least 10 characters"),
  opponents: Yup.string().min(3, "Opponents must be at least 3 characters"),
});

export default function PokemonDetails({ id }) {
  const router = useRouter();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error("Failed to fetch Pokémon");
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPokemon();
  }, [id]);

  function getFavourites() {
    return JSON.parse(localStorage.getItem("favourites")) || [];
  }

  function handleClick() {
    const favourites = getFavourites();
    const newFavPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      img:
        pokemon.sprites.other?.showdown?.front_default ||
        pokemon.sprites.front_default,
    };

    if (!favourites.some((fav) => fav.id === pokemon.id)) {
      favourites.push(newFavPokemon);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  }

  function deleteNote(note) {
    const new_notes = notes.filter((el) => el.id != note.id);
    setNotes(new_notes);
    localStorage.setItem("notes", JSON.stringify(new_notes));
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.other.showdown.front_default}
        alt={pokemon.name}
      />
      <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <h3>Stats:</h3>
      <ul>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button className="favourites-button" onClick={handleClick}>
          Add to favourites
        </button>
        <Formik
          initialValues={{
            tacticName: "",
            strategy: "",
            effectiveness: "",
            conditions: "",
            trainingDate: "",
            opponents: "",
          }}
          validationSchema={addNewNote}
          onSubmit={(values, { resetForm }) => {
            try {
              const note_id = uuidv4();
              const new_note = {
                id: note_id,
                pokemon: id,
                tacticName: values.tacticName,
                strategy: values.strategy,
                effectiveness: Number(values.effectiveness),
                conditions: values.conditions,
                trainingDate: values.trainingDate,
                opponents: values.opponents
                  .split(",")
                  .map((opponent) => opponent.trim()),
                createdAt: new Date().toDateString(),
                updatedAt: new Date().toDateString(),
              };
              const updatedNotes = Array.isArray(notes)
                ? [...notes, new_note]
                : [new_note];
              setNotes(updatedNotes);
              localStorage.setItem("notes", JSON.stringify(updatedNotes));
            } catch (error) {
              console.error("Error creating the note:", error);
            }
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label>Tactic name:</label>
                <Field type="text" name="tacticName" />
                <ErrorMessage name="tacticName" component="div" />
              </div>
              <div>
                <label>Strategy:</label>
                <Field type="text" name="strategy" />
                <ErrorMessage name="strategy" component="div" />
              </div>
              <div>
                <label>Effectiveness:</label>
                <Field type="number" min="1" max="5" name="effectiveness" />
                <ErrorMessage name="effectiveness" component="div" />
              </div>
              <div>
                <label>Conditions:</label>
                <Field type="text" name="conditions" />
                <ErrorMessage name="conditions" component="div" />
              </div>
              <div>
                <label>Training date:</label>
                <Field type="date" name="trainingDate" />
                <ErrorMessage name="trainingDate" component="div" />
              </div>
              <div>
                <label>Opponents:</label>
                <Field type="text" name="opponents" />
                <ErrorMessage name="opponents" component="div" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Add new note
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="notes">
        {Array.isArray(notes) && notes.length > 0 ? (
          notes
            .filter((note) => note.pokemon === id)
            .map((note, index) => (
              <div className="notes-item" key={note.id || index}>
                <h3>{note.tacticName}</h3>
                <p>Strategy: {note.strategy}</p>
                <p>Effectiveness: {note.effectiveness}</p>
                <p>Conditions: {note.conditions}</p>
                <p>Training date: {note.trainingDate || "N/A"}</p>
                <p>Opponents: {note.opponents.join(", ")}</p>
                <p>Created at: {note.createdAt}</p>
                <p>Updated at: {note.updatedAt}</p>
                <div className="note-buttons">
                  <button className="note" onClick={() => deleteNote(note)}>
                    Delete note
                  </button>
                </div>
                <Formik
                  initialValues={{
                    tacticName: note.tacticName,
                    strategy: note.strategy,
                    effectiveness: note.effectiveness,
                    conditions: note.conditions,
                    trainingDate: note.trainingDate,
                    opponents: note.opponents,
                  }}
                  validationSchema={updateNote}
                  onSubmit={(values, { resetForm }) => {
                    try {
                      const updated_note = {
                        id: note.id,
                        pokemon: id,
                        tacticName: values.tacticName,
                        strategy: values.strategy,
                        effectiveness: Number(values.effectiveness),
                        conditions: values.conditions,
                        trainingDate: values.trainingDate,
                        opponents: values.opponents
                          .split(",")
                          .map((opponent) => opponent.trim()),
                        createdAt: values.createdAt,
                        updatedAt: new Date().toDateString(),
                      };
                      const filteredNotes = notes.filter(
                        (el) => el.id != note.id
                      );
                      const updatedNotes = Array.isArray(notes)
                        ? [...filteredNotes, updated_note]
                        : [updated_note];
                      setNotes(updatedNotes);
                      localStorage.setItem(
                        "notes",
                        JSON.stringify(updatedNotes)
                      );
                    } catch (error) {
                      console.error("Error creating the note:", error);
                    }
                    resetForm();
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div>
                        <label>Tactic name:</label>
                        <Field type="text" name="tacticName" />
                        <ErrorMessage name="tacticName" component="div" />
                      </div>
                      <div>
                        <label>Strategy:</label>
                        <Field type="text" name="strategy" />
                        <ErrorMessage name="strategy" component="div" />
                      </div>
                      <div>
                        <label>Effectiveness:</label>
                        <Field
                          type="number"
                          min="1"
                          max="5"
                          name="effectiveness"
                        />
                        <ErrorMessage name="effectiveness" component="div" />
                      </div>
                      <div>
                        <label>Conditions:</label>
                        <Field type="text" name="conditions" />
                        <ErrorMessage name="conditions" component="div" />
                      </div>
                      <div>
                        <label>Training date:</label>
                        <Field type="date" name="trainingDate" />
                        <ErrorMessage name="trainingDate" component="div" />
                      </div>
                      <div>
                        <label>Opponents:</label>
                        <Field type="text" name="opponents" />
                        <ErrorMessage name="opponents" component="div" />
                      </div>
                      <button type="submit" disabled={isSubmitting}>
                        Edit note
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            ))
        ) : (
          <p>No notes yet!</p>
        )}
      </div>
    </div>
  );
}
