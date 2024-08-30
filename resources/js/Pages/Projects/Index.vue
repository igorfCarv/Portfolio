<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
    projects: Object,
});
</script>
<template>

    <Head title="Projects Index" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Projects</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex justify-end m-2 p-2">
                    <Link href="/projects/create"
                        class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                    Novos Projetos </Link>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Id:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Nome:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Habilidade:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Imagem:
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Configurações</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="project in projects.data" :key="project.id"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ project.id }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ project.name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ project.skill.name }}
                                </td>
                                <td class="px-6 py-4">
                                    <img :src="project.image" class="w-8 h-12 rounded-full" alt="Imagens das Habilidades">
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#"
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
