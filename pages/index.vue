<template>
    <div class="bg-slate-100 min-h-screen p-32 font-sans flex flex-col justify-center items-center">
        <img src="https://nuxt.com/assets/design-kit/icon-green.svg" alt="" width="200">
        <div class="text-4xl font-bold">
            <h1>Welcome to the homepage</h1>
        </div>
        <div class="flex gap-4">
            <nuxt-link to="/about">About</nuxt-link>
            <nuxt-link to="/home">Home</nuxt-link>
        </div>

    </div>
</template>