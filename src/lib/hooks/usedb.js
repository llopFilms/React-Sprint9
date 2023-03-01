import {
	updateDoc,
	addDoc,
	setDoc,
	doc,
	getDoc,
	collection,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { useState } from "react";

export const usedb = () => {
	const [dadesUsuari, setDadesUsuari] = useState({
		correuElectronic: null,
		administrador: null,
		nom: null,
		cognom: null,
		poblacio: null,
		codiPostal: null,
		telefon: null,
	});

	const [dadesArtista, setDadesArtista] = useState({
		nom: null,
		genere: null,
		personaContacte: null,
		correuElectronic: null,
		telefon: null,
		instagram: null,
		web: null,
		catxet: null,
	});

	const [dadesEspai, setDadesEspai] = useState({
		nom: null,
		adreça: null,
		poblacio: null,
		codiPostal: null,
		personaContacte: null,
		correuElectronic: null,
		telefon: null,
		instagram: null,
		web: null,
		aforament: null,
	});

	const [dadesEsdeveniment, setDadesEsdeveniment] = useState({
		nom: null,
		artista: null,
		data: null,
		espai: null,
		hora: null,
		preu: null,
	});

	const setDades = (clau, valor, setter) => {
		setter((prev) => ({
			...prev,
			[clau]: valor,
		}));
	};

	const afegirElement = (nomdb, dadesElement) => {
		addDoc(collection(db, nomdb), dadesElement);
	};

	const setElement = (nomdb, id, dadesElement) => {
		setDoc(doc(db, nomdb, id), dadesElement);
	};

	const actualitzarElement = (nomdb, id, dadesElement) =>
		updateDoc(doc(db, nomdb, id), dadesElement);

	const obtenirElement = (nomdb, id) => getDoc(doc(db, nomdb, id));

	return {
		dadesUsuari,
		setDadesUsuari,
		dadesArtista,
		setDadesArtista,
		dadesEspai,
		setDadesEspai,
		dadesEsdeveniment,
		setDadesEsdeveniment,
		setDades,
		afegirElement,
		setElement,
		actualitzarElement,
		obtenirElement,
	};
};