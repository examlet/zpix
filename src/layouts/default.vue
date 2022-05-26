<script setup lang="ts">
const mobileMenuCollapsed = ref(true);
const toggleMobileMenu = () => (mobileMenuCollapsed.value = !mobileMenuCollapsed.value);

const seconds = ref(600);

const { pause, resume, isActive } = useIntervalFn(() => {
    seconds.value = seconds.value - 1;
    if (seconds.value == 2) {
        pause()
    }
}, 1000);

const time = ref('10:00')
watch(seconds, () => {
    time.value = Math.floor(seconds.value / 60) + ':' + seconds.value % 60;
})
</script>

<template>
    <div w-full h-full flex flex-col>
        <header fixed top-0 left-0 right-0 h-64px z-99>
            <div w-full h-full bg="[#ffffff]" border="b [#e7e7e7]" p="20px">
                <div relative w="full xl:1024px" h-full mx-auto>
                    <div flex flex-row justify-between items-center h-full>
                        <div flex items-center>
                            <div cursor-pointer flex sm:hidden items-center mr-20px @click="toggleMobileMenu">
                                <div relative inline-block w-20px h-24px space-y-1 h-full>
                                    <div bg="[#35495e]" top="-6px" w-20px h-2px rounded-4px />
                                    <div bg="[#35495e]" w-20px h-2px rounded-4px />
                                    <div bg="[#35495e]" bottom="-6px" w-20px h-2px rounded-4px />
                                </div>
                            </div>
                            <div fw-600 text="20px" mb="2px">PARTA ENEM</div>
                            <div hidden sm:block ml-40px>
                                Pagamento de mensalidades on-line
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute block sm:hidden bg-[#fff] rounded top-64px shadow-lg w-full transition duration-300 -z-1"
                :class="[mobileMenuCollapsed ? '-translate-y-120%' : '-translate-y-0']">
                <div flex flex-col py-14px text-18px w="full xl:1024px" px="20px sm:10px lg:0" relative mx-auto h-full>
                    <div class="h-28px">
                        <div text="14px sm:16px">Pagamento de mensalidades on-line</div>
                    </div>
                </div>
            </div>
        </header>

        <main flex-grow flex-shrink-0 basis-auto pt-64px>
            <div relative w="298px sm:480px md:640px lg:768px xl:1024px" h-full mx-auto>
                <NuxtLink to="/" flex items-center mt-10px>
                    <div class="i-carbon-arrow-left" />
                </NuxtLink>
                <h1 pt="sm:30px" fw-500 leading="120%" text="center sm:left 22px xl:62px">
                    <div mb-10px w="full sm:48px" class="i-carbon-timer" />
                    <p ml="sm:20px" inline-flex>Tempo restante - {{time}}</p>
                </h1>
                <slot />
            </div>
        </main>
    </div>
</template>
