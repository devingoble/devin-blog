<template>
    <div class="flex flex-grow md:flex-col justify-between items-center h-20">
        <div class="flex md:flex-col items-center">
            <div class="my-1 mx-2 w-16 h-16 md:mt-4 md:w-32 md:h-32">
                <g-image src="~/assets/headshot.jpg" class="rounded-full"/>
            </div>
            <span class="text-3xl ml-1 md:ml-0">Devin Goble</span>
        </div>
        <div class="flex flex-row items-center mr-2 md:mr-0">
            <a class="m-1 md:m-2" href="https://github.com/devingoble" target="_blank" title="GitHub"><font-awesome :icon="['fab', 'github']" size="2x" /></a>
            <a class="m-1 md:m-2" href="https://www.linkedin.com/in/devingoble" target="_blank" title="LinkedIn"><font-awesome :icon="['fab', 'linkedin']" size="2x" /></a>
            <a class="m-1 md:m-2" href="https://twitter.com/devinbgoble" target="_blank" title="Twitter"><font-awesome :icon="['fab', 'twitter']" size="2x" /></a>
            <a class="m-1 md:m-2" href="https://dev.to/devingoble" target="_blank" title="Dev.to"><font-awesome :icon="['fab', 'dev']" size="2x" /></a>
        </div>
    </div>
</template>

<style scoped>

</style>