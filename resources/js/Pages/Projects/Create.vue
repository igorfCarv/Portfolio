<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    skills: Array
});

const form = useForm({
    name: '',
    image: null,
    skill_id :"",
    project_url:""
});

const submit = () => {
    form.post(route('projects.store'));
};

</script>
<template>

    <Head title="Novos Projetos" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Novos Projetos</h2>
        </template>

        <div class="py-12">
            <div class="max-w-md mx-auto sm:px-6 lg:px-8 bg-white">
                <form class="p-4" @submit.prevent="submit">
                    <div>
                        <InputLabel for="skill" value="Habilidade" />
                        <select v-model="form.skill_id" id="skill_id" name="skill_id" class="border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm mt-1 block w-full">
                            <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.name }}</option>
                        </select>
                        <InputError class="mt-2" :message="form.errors.skill_id" />
                    </div>
                    <div class="mt-2">
                        <InputLabel for="name" value="Name" />
                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name"
                            autofocus autocomplete="username" />
                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>
                    <div class="mt-2">
                        <InputLabel for="project_url" value="Link do projeto" />
                        <TextInput id="project_url" type="text" class="mt-1 block w-full" v-model="form.project_url" 
                            autofocus autocomplete="userproject_url" />
                        <InputError class="mt-2" :message="form.errors.project_url" />
                    </div>
                    <div class="mt-2">
                        <InputLabel for="image" value="Image" />
                        <TextInput id="image" type="file" class="mt-1 block w-full"
                            @input="form.image = $event.target.files[0]" />
                        <InputError class="mt-2" :message="form.errors.image" />
                    </div>


                    <div class="flex items-center justify-end mt-4">

                        <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing">
                            Cadastrar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
