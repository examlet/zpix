<script setup lang="ts">
const showed = ref(false);
const showModal = ref(false);
const name = ref('');
const email = ref('');
const type = ref('');

const sendToTable = async () => {
    if (name.value && email.value) {
        await useFetch(`/api/gs?name=${name.value}&mail=${email.value}&type=${type.value}&product=top&price=199.90`);
        window.open(`http://t.me/enem_partabot`, '_top');
    }
}
</script>

<template>
    <div>
        <QModal v-model="showModal">
            <QCard @close="showModal = !showModal" title="Insira seus dados" closable w="240px sm:300px">
                <input v-model="name" h-34px w-full type="text" placeholder="Seu nome" />
                <input v-model="email" h-34px w-full type="text" mt="10px" placeholder="Seu e-mail" />
                <QButton @click="sendToTable" mt-20px fit="grow">Continuar</QButton>
                <template #action>
                    <span text-10px>Preencha o seu e-mail abaixo para receber a nota de compra</span>
                </template>
            </QCard>
        </QModal>

        <h2 text="center sm:left [#808080] 16px xl:36px" mt-10px fw-500 leading="110%">
            Pague a mensalidade
        </h2>
        <div pt="20px sm:40px" mx-auto w-full>
            <QCard max-w-600px hoverable title="PARTA Top">
                <template #cover>
                    <div w-full h-4px bg="[#a0ec00]" />
                </template>
                <template #extra>
                    <b>R$ 199.90</b>
                </template>
                <div grid grid-cols="[1fr]">
                    <div @click="showModal = true; type='карта'" cursor-pointer border="1px [#e5e8eb]" rounded-lg w-full h-60px grid
                        grid-cols="[1fr_4fr]" mb-20px>
                        <div pl-15px pt-18px>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V12H20V17C20 17.55 19.55 18 19 18ZM20 8H4V6H20V8Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div h-full items-center py-8px>
                            <h3>Cartão de Crédito</h3>
                            <span text="12px [#637381]">
                                Em até 12x de R$ 199.90
                            </span>
                        </div>
                    </div>

                    <div @click="showModal = true; type='2 карты'" cursor-pointer border="1px [#e5e8eb]" rounded-lg w-full h-60px grid
                        grid-cols="[1fr_4fr]" mb-20px>
                        <div pl-15px pt-18px>
                            <img src="https://cdn.icon-icons.com/icons2/37/PNG/512/bankcards_theapplication_banco_3050.png"
                                alt="" width="24" height="24">
                        </div>
                        <div h-full items-center py-8px>
                            <h3>Pagar com Dois Cartões</h3>
                            <span text="12px [#637381]">
                                Em até 12x de R$ 199.90
                            </span>
                        </div>
                    </div>

                    <div @click="showModal = true; type='болето'" cursor-pointer border="1px [#e5e8eb]" rounded-lg w-full h-60px grid
                        grid-cols="[1fr_4fr]" mb-20px>
                        <div pl-15px pt-18px>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 5H5V19H2V5ZM7 5H9V19H7V5ZM20 5H22V19H20V5ZM14 5H18V19H14V5ZM10 5H12V19H10V5Z"
                                    fill="currentColor"></path>
                            </svg>
                        </div>
                        <div h-full items-center py-8px>
                            <h3>Boleto</h3><span text="12px [#637381]">R$ 2 158,92 (10% off)</span>
                        </div>
                    </div>

                    <div @click="showModal = true; type='пикс'" cursor-pointer border="1px [#e5e8eb]" rounded-lg w-full h-60px grid
                        grid-cols="[1fr_4fr]">
                        <div pl-15px pt-18px>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.5975 17.2986C16.8129 17.2986 16.0744 16.9946 15.5195 16.4397L12.52 13.4403C12.3096 13.229 11.9422 13.2298 11.7316 13.4403L8.72117 16.4508C8.1662 17.0056 7.42842 17.3104 6.64239 17.3104H6.05264L9.85235 21.1101C11.0374 22.2966 12.9618 22.2966 14.1484 21.1101L17.9593 17.2986H17.5975Z"
                                    fill="#32BCAD"></path>
                                <path
                                    d="M8.72117 7.54931C8.1662 6.99435 7.42842 6.68966 6.64476 6.68966H6.05264L9.85235 2.88994C11.0374 1.70335 12.9618 1.70335 14.1484 2.88994L17.9593 6.70075H17.5975C16.8129 6.70075 16.0744 7.00544 15.5195 7.56039L12.52 10.5597C12.3024 10.7782 11.9486 10.7774 11.7316 10.5597L8.72117 7.54931Z"
                                    fill="#32BCAD"></path>
                                <path
                                    d="M21.1107 9.85123L18.8079 7.54854C18.758 7.56987 18.7018 7.58257 18.644 7.58257H17.5975C17.056 7.58257 16.5256 7.80178 16.1441 8.1834L13.1439 11.1843C12.8637 11.4646 12.4947 11.6054 12.1259 11.6054C11.757 11.6054 11.3889 11.4646 11.1086 11.1843L8.09739 8.17307C7.71424 7.79077 7.18466 7.57148 6.64239 7.57148H5.35683C5.30139 7.57148 5.2507 7.55802 5.20084 7.53898L2.88939 9.85123C1.70354 11.0387 1.70354 12.9614 2.88939 14.148L5.20084 16.4603C5.24993 16.4413 5.30139 16.4286 5.35683 16.4286H6.64239C7.18466 16.4286 7.71424 16.2086 8.09739 15.827L11.1079 12.8158C11.6525 12.2727 12.6 12.2727 13.1439 12.8158L16.1441 15.8159C16.5256 16.1991 17.056 16.4175 17.5975 16.4175H18.644C18.7018 16.4175 18.758 16.4302 18.8079 16.4508L21.1107 14.148C22.2964 12.9614 22.2964 11.0387 21.1107 9.85123Z"
                                    fill="#32BCAD"></path>
                            </svg>
                        </div>
                        <div h-full items-center py-8px>
                            <h3>Pix</h3>
                            <span text="12px [#637381]">R$ 2 158,92 (10% off)</span>
                        </div>

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
