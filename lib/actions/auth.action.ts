"use server";

export async function signUp(params : SignInParams){
    const {ui, name, email} = params;
    try {

    }catch (error) {
        console.error("Error Creating a User",error);
        if (error.code ==='auth/email-already-exists') {
            return {
                success: false,
                message: 'This Email already exists',
            };
        }
    }
}