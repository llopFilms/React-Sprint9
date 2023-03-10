import { useAutenticacio } from "./useAutenticacio";
import { useState } from "react";
import { signUp } from "../utils/autenticacio/signUp";
import { logIn } from "../utils/autenticacio/logIn";
import { resetPassword } from "../utils/autenticacio/resetPassword";
import { logOut } from "../utils/autenticacio/logOut";
import { logueigAmbGoogle } from "../utils/autenticacio/logueigAmbGoogle";
import { actualitzarPerfil } from "../utils/autenticacio/actualitzarPerfil";
import { usedb } from './usedb';
import { altaUsuari } from '../utils/administrador/altaUsuari';

export const useFormulariAutenticacio = () => {
	const { signup, login, resetpassword, updateemail, updatepassword, logout } =
		useAutenticacio();

	const { setElement, actualitzarElement } = usedb();

	const [logueigUsuari, setLogueigUsuari] = useState({
		processant: false,
		error: "",
		missatge: "Els camps marcats amb * són obligatoris",
	});

	const handleSubmitSignup = (
		e,
		dadesUsuari,
		claudePasRef,
		claudePasConfirmacioRef,
		usuariLoguejat,
		navega
	) =>
		signUp(
			e,
			dadesUsuari,
			claudePasRef,
			claudePasConfirmacioRef,
			usuariLoguejat,
			navega,
			setLogueigUsuari,
			signup,
			setElement
		);

	const handleSubmitAltaUsuari = (
		e,
		dadesUsuari,
		claudePasRef,
		claudePasConfirmacioRef
	) =>
		altaUsuari(
			e,
			dadesUsuari,
			claudePasRef,
			claudePasConfirmacioRef,
			setLogueigUsuari,
			signup,
			setElement
		);

	const handleSubmitLogin = (
		e,
		dadesUsuari,
		claudePasRef,
		usuariLoguejat,
		navega
	) =>
		logIn(
			e,
			dadesUsuari,
			claudePasRef,
			usuariLoguejat,
			navega,
			setLogueigUsuari,
			login
		);

	const handleSubmitGoogle = (usuariLoguejat, navega) =>
		logueigAmbGoogle(usuariLoguejat, setLogueigUsuari, navega);

	const handleSubmitNovaClaudePas = (e, correuElectronicRef) =>
		resetPassword(e, correuElectronicRef, setLogueigUsuari, resetpassword);

	const handleSubmitUpdateProfile = (
		e,
		dadesUsuari,
		novaClaudePasRef,
		novaClaudePasConfirmacioRef,
		usuariLoguejatComplet,
		usuariLoguejat,
		authID,
		navega
	) =>
		actualitzarPerfil(
			e,
			dadesUsuari,
			novaClaudePasRef,
			novaClaudePasConfirmacioRef,
			usuariLoguejatComplet,
			usuariLoguejat,
			authID,
			navega,
			setLogueigUsuari,
			updateemail,
			updatepassword,
			actualitzarElement
		);

	const handleLogout = (usuariLoguejat, navega) =>
		logOut(usuariLoguejat, setLogueigUsuari, logout, navega);

	return {
		error: logueigUsuari.error,
		processant: logueigUsuari.processant,
		missatge: logueigUsuari.missatge,
		handleSubmitSignup,
		handleSubmitAltaUsuari,
		handleSubmitLogin,
		handleSubmitGoogle,
		handleSubmitNovaClaudePas,
		handleSubmitUpdateProfile,
		handleLogout,
	};
};
