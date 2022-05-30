<script setup lang="ts">
const showed = ref(false);
</script>

<template>
    <div>
        <h2 text="center sm:left [#808080] 16px xl:36px" mt-10px fw-500 leading="110%">
            Pague a mensalidade
        </h2>
        <div pt="20px sm:40px" mx-auto w-full>
            <QCard max-w-600px hoverable title="PARTA Básico">
                <template #cover>
                    <div w-full h-4px bg="[#01e8fd]" />
                </template>
                <template #extra>
                    <b>R$ 29.90</b>
                </template>
                <div grid grid-cols="[1fr] sm:[1fr_1fr]">
                    <div v-show="showed" w-240px h-240px>
                        <img mx-auto src="/b.webp" alt="b pix" width="240" height="240" />
                    </div>
                    <div v-show="showed == false" w-240px h-240px style="position: relative; background-color: #fafafc;">
                        <QButton @click="showed = true;" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">PAGAR</QButton>
                    </div>
                    <div mt-10px text="16px" fw-500>
                        <div text="#767676">De</div>
                        <div>KEVIN D ARC ROCHA</div>
                        <div text="#767676" mt-5px>(CHAVE) CPF</div>
                        <div>***.186.708-**</div>
                        <div text="#767676" mt-5px>Informações ao pagador</div>
                        <div>Parta Básico</div>
                    </div>
                </div>

                <template #action>
                    <QSpoiler title="Descrição do produto">
                        <b>
                            10 (dez) horas semanais de aulas ao vivo<br>
                            1 (uma) correção de redação por mês<br>
                            1 (uma) hora de prática de escrita ao vivo com guia<br>
                            orientação para organização e planejamento<br>
                            simulados do ENEM, FUVEST e UNICAMP<br>
                        </b>
                    </QSpoiler>
                </template>
            </QCard>
        </div>
    </div>
</template>
