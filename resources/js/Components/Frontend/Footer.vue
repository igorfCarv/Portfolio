<script setup>
const novoYear = new Date().getFullYear();
</script>
<template>
    <footer class="bg-light-secondary dark:bg-dark-secondary py-12">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div class="flex space-x-6 items-center justify-center">
                    <img src="/images/logoPortifolio.svg" alt="minha Logo" class="h-16 w-auto">
                </div>
                <p class="text-paragraph opacity-80 text-[15px]">
                    &copy; {{ novoYear }} Portifolio Igor
                </p>
            </div>
        </div>
    </footer>
</template>