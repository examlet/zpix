<script setup lang="ts">
</script>

<template>
    <div>
        <h2 text="center sm:left [#808080] 16px xl:36px" mt-10px fw-500 leading="110%">
            Pague a mensalidade
        </h2>
        <div pt="20px sm:40px" mx-auto w-full>
            <QCard max-w-300px hoverable title="PARTA Top">
                <template #cover>
                    <div w-full h-4px bg="[#a0ec00]" />
                </template>
                <template #extra>
                    <b>R$ 199.90</b>
                </template>
                <div grid grid-cols="[1fr] sm:[1fr_1fr]">
                    <img mx-auto src="/t.webp" alt="t pix" width="240" height="240">
                    <div mt-10px text="16px" fw-500>
                        <div text="#767676">De</div>
                        <div>KEVIN D ARC ROCHA</div>
                        <div text="#767676" mt-5px>(CHAVE) CPF</div>
                        <div>***.186.708-**</div>
                        <div text="#767676" mt-5px>Informações ao pagador</div>
                        <div>Parta Top</div>
                    </div>
                </div>
                <template #action>
                    <QSpoiler title="Descrição do produto">
                        <b>
                            20 (vinte) horas semanais de aulas ao vivo<br>
                            Lição de casa no estilo ENEM<br>
                            Orientador respondendo em todas questões práticas<br>
                            Mentor ajudando a entender todos os temas e respondendo todas as perguntas<br>
                            relacionado ao ingresso na universidade<br>
                            10 (dez) correções de redação por mês<br>
                            15 (quinze) horas de sessões de perguntas e respontas ao vivo com exercícios<br>
                            4 (quatro) horas de prática de escrita ao vivo com guia<br>
                            orientação para organização e planejamento<br>
                            simulados do ENEM, FUVEST e UNICAMP<br>
                        </b>
                    </QSpoiler>
                </template>
            </QCard>
        </div>
    </div>
</template>
