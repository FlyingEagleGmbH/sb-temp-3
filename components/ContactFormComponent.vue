<template>
    <v-container fluid id="contact">
        <v-card class="contact-form-card" :elevation="1">
            <v-card-title style="padding: 0; padding-bottom: 2rem;"><h2>Kontaktformular</h2></v-card-title>
            <form class="contact-form" @submit.prevent="submit" name="contact">
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field class="contact-form-field" prepend-inner-icon="mdi-badge-account-outline" v-model="name.value.value" :counter="10"
                            :error-messages="name.errorMessage.value" label="Name*" name="name" id="name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field class="contact-form-field" prepend-inner-icon="mdi-phone" v-model="phone.value.value" :counter="7"
                            :error-messages="phone.errorMessage.value" label="Telefonnummer*" name="phone"
                            id="phone"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="8">
                        <v-text-field class="contact-form-field" prepend-inner-icon="mdi-at" v-model="email.value.value"
                            :error-messages="email.errorMessage.value" label="E-Mail*" name="email"
                            id="email"></v-text-field>

                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-select class="contact-form-field" prepend-inner-icon="mdi-bug" v-model="select.value.value" :items="items"
                            :error-messages="select.errorMessage.value" label="Leistung" name="service"
                            id="service"></v-select>

                    </v-col>
                </v-row>
                <v-textarea v-model="message.value.value" prepend-inner-icon="mdi-comment" name="message" id="message" auto-grow variant="filled" :counter="0" label="Nachricht" rows="1"></v-textarea>

                <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1"
                    label="Ich akzeptiere die Datenschutbestimmungen" type="checkbox" class="form-checkbox"></v-checkbox>

                <div class="form-btns">
                    <v-btn type="submit" class="form-btn" variant="outlined" :loading="loading">
                        <p>Bestätigen</p>
                    </v-btn>

                    <v-btn @click="handleReset" class="form-btn" variant="outlined" ripple>
                        <p>Reset</p>
                    </v-btn>
                </div>
            </form>
        </v-card>
    </v-container>
</template>
<script setup lang="js">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { useReCaptcha } from 'vue-recaptcha-v3'
import { httpsCallable } from "firebase/functions";

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const { $functions, $url } = useNuxtApp();

const sendMail = httpsCallable($functions, 'sendMail');
const verifyCaptcha3 = httpsCallable($functions, 'verifyCaptcha3Dummy');

let loading = ref(false);

// Define validation rules and form handling
const { validate, handleReset, resetForm, errors } = useForm({
    validationSchema: {
        name: value => value?.length >= 2 || 'Name muss aus mindestens zwei Zeichen bestehen.',
        phone: value => (value?.length > 9 && /[0-9-]+/.test(value)) || 'Telefonnummer muss aus 9 Zahlen bestehen.',
        email: value => /^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value) || 'Keine gültige E-Mail.',
        message: () => true,
        select: () => true,
        checkbox: value => value === '1' || 'Bitte auswählen.'
    },
});

// Define form fields using useField
const fields = ['name', 'phone', 'email', 'message', 'select', 'checkbox']
const {
    name, phone, email, message, select, checkbox
} = fields.reduce((acc, field) => ({ ...acc, [field]: useField(field) }), {});

// Pre-defined items for the select field
const items = ref([
    'Nagetiere', 'Käfer', 'Wespen', 'Bettwanzen', 'Marder & Siebenschläfer', 'Sonstiges'
]);

// Handle form submission
const submit = async (evt) => {
    try {
        // Check if reCAPTCHA is available and get the token
        let token = null;
        let validationResult = null;
        loading = true;
        try {
            await recaptchaLoaded();
            token = await executeRecaptcha('login');
        } catch (error) {
            console.error('Error while loading or executing reCAPTCHA:', error);
            loading = false;
        }

        if (token) {
            try {
                const recaptchaResponse = await verifyCaptcha3(token);

                if (recaptchaResponse.data.success) {
                    // Validate form fields
                    validationResult = await validate();
                    if (validationResult.valid) {
                        // Submit the form data if valid
                        handleSubmit(evt.target);
                    } else {
                        // Set validation errors if form is invalid
                        setErrors(validationResult.errors);
                    }
                    loading = false;
                } else {
                    alert('You might be a bot. Please try again.');
                    loading = false;
                }
            } catch (error) {
                console.error('Error while verifying reCAPTCHA:', error);
                // Proceed with form submission even if reCAPTCHA verification fails
                validationResult = await validate();
                if (validationResult.valid) {
                    handleSubmit(evt.target);
                } else {
                    setErrors(validationResult.errors);
                }
                loading = false;
            }
        } else {
            // Proceed with form submission without reCAPTCHA
            validationResult = await validate();
            if (validationResult.valid) {
                handleSubmit(evt.target);
            } else {
                setErrors(validationResult.errors);
            }
            loading = false;
        }
    } catch (error) {
        console.error('Error while processing form submission:', error);
        loading = false;
    }
};

// Submit form data using Firebase Functions
const handleSubmit = async (values) => {
    const { name, message, email, service, phone } = values;
    const data = {
        name: name.value,
        message: message.value != null ? message.value : "no message provided",
        email: email.value,
        service: service.value != null ? service.value : "no option selected",
        phone: phone.value,
        url: $url()
    }

    await sendMail(data).catch(error => {
        console.error(error);
        alert("Leider hat etwas bei ihrer Anfrage nicht funktioniert.")
    });

    alert("Vielen Dank für ihre Anfrage " + name.value + ".")
    resetForm();
}


// Set validation errors
const setErrors = (validationErrors) => {
    // Set the validation errors to the 'errors' data property
    for (const key in validationErrors) {
        errors[key] = validationErrors[key];
    }
};
</script>

<style lang="scss"></style>