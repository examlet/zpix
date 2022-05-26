<script setup lang="ts">
</script>

<template>
    <div>
        <h2 text="center sm:left [#808080] 16px xl:36px" mt-10px fw-500 leading="110%">
            Escolha seu formato de aprendizado
        </h2>
        <div grid gap-20px pt="20px sm:40px">
            <NuxtLink to="/basic">
                <QCard hoverable title="PARTA Básico">
                    <template #cover>
                        <div w-full h-4px bg="[#01e8fd]" />
                    </template>
                    10 (dez) horas semanais de aulas ao vivo <b>Por: R$ 29.90</b>
                    <template #action>
                        escolha e saiba mais
                    </template>
                </QCard>
            </NuxtLink>

            <NuxtLink to="/med">
                <QCard hoverable title="PARTA Med">
                    <template #cover>
                        <div w-full h-4px bg="[#ff068c]" />
                    </template>
                    20 (vinte) horas semanais de aulas ao vivo <b>Por: R$ 99.90</b>
                    <template #action>
                        escolha e saiba mais
                    </template>
                </QCard>
            </NuxtLink>

            <NuxtLink to="/top">
                <QCard hoverable title="PARTA Top">
                    <template #cover>
                        <div w-full h-4px bg="[#a0ec00]" />
                    </template>
                    Melhor e mais completo <b>Por: R$ 199.90</b>
                    <template #action>
                        escolha e saiba mais
                    </template>
                </QCard>
            </NuxtLink>
        </div>
    </div>
</template>
