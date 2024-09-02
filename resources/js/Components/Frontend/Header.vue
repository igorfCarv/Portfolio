<script setup>
import { ref } from 'vue';
const showMobileMenu = ref("false");

</script>

<template>
    <nav id="mainPage" class="bg-light-primary border-gray-200 dark:bg-dark-primary">
        <div class="container flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/images/logoPortifolio.svg" class="h-16" alt="Minha Logo" />
            </a>
            <button @click="showMobileMenu = !showMobileMenu" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="w-full md:block md:w-auto" id="navbar-default" :class="{ hidden: showMobileMenu }">
                <ul
                    class="flex flex-col p-4 mt-4 rounded-lg  border border-light-tail-500 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <li>
                        <a href="#mainPage"
                            class="block py-2 pr-4 pl-3 text-white bg-light-tail-500 dark:bg-dark-navy-100 rounded md:bg-transparent md:text-accent md:p-0 dark:text-white md:dark:text-blue-500"
                            aria-current="page">Página Inicial</a>
                    </li>
                    <li>
                        <a href="#aboutMe"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sobre Mim</a>
                    </li>
                    <li>
                        <a href="#skills"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Minhas Habilidades</a>
                    </li>
                    <li>
                        <a href="#portfolio"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Últimos Trabalhos</a>
                    </li>
                    <li>
                        <a href="#contact"
                            class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contato</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>