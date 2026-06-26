<template>
    <v-container>
        <h1>Fixed Outcomes</h1>
        <!-- <v-text-field label="How many do you spend in this month?" variant="solo-filled" v-model="work" @keydown.enter="addwork()"></v-text-field>
        <v-btn rounded="xl" size="x-large" block @click="addoutcome()">Add Fixed Outcome</v-btn> -->
       
            <v-row class="my-10">
                <v-col cols="5">
                    <v-responsive>
                        <v-text-field label="What do you spend in this month?" variant="solo-filled" v-model="work.desc" @keydown.enter="addoutcome()"></v-text-field>
                    </v-responsive>
                </v-col>
                <v-col cols="3">
                    <v-responsive class="mx-auto">
                        <v-text-field
                            v-model="work.amount"
                            hide-details="auto"
                            label="$ Amount"
                            type = "number"
                            clearable
                        ></v-text-field>
                    </v-responsive>
                </v-col>
                <v-col cols="3">
                    <v-responsive class="mx-auto">
                        <v-text-field
                            v-model="work.month"
                            hide-details="auto"
                            label="Month"
                            type = "month"
                            clearable
                        ></v-text-field>
                    </v-responsive>
                </v-col>
                
            </v-row>
            <v-row>
                <v-col cols="6">                      
                        <v-btn
                        
                        class="text-none mb-4"
                        color="indigo-darken-3"
                        size="x-large"
                        variant="flat"
                        block
                        @click="addoutcome()"
                    >
                        Add Fixed Outcome
                    </v-btn>
                </v-col>
                <v-col cols="6">    

                    <v-btn
                        class="text-none"
                        color="grey-lighten-3"
                        size="x-large"
                        variant="flat"
                        block
                        @click="clearOutcome"
                    >
                        Cancel
                    </v-btn>
                </v-col>
            </v-row>    
        <v-row class="my-10">
            <v-col cols="12">
                <v-table striped="odd">
                    <thead>
                        <tr>
                        <th class="text-left">
                            Description:
                        </th>
                        <th class="text-left">
                            Amount:
                        </th>
                        <th class="text-left">
                            Month:
                        </th>
                        <!-- <th>
                            <div v-if="deletedWork.length <= 0">
                            <v-icon color="primary" @click="undoItem()" icon="mdi-undo" disabled></v-icon>
                            </div>
                            <div v-else>
                            <v-icon color="primary" @click="undoItem()" icon="mdi-undo" ></v-icon>
                            </div>
                        </th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in outcome" :key="item.desc">
                        <td>{{ item.desc }}</td>
                        <td><v-text-field type="number" v-model.number="item.amount" @change="updateOutcome(item)"></v-text-field></td>
                        <td>{{ item.month }}</td>
                        <!-- <td><v-btn rounded="xl" size="small" block @click="removeWork(item)">Remove</v-btn></td> -->
                        <td>
                            <v-icon color="error" icon="mdi-delete" @click="removeOutcome(item)"></v-icon>
                        </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>

import{ reactive, ref } from 'vue';
const work = reactive({
    desc: '',
    amount: '',
    month: '',
});
const addoutcome = () => {
    if (work.desc && work.amount && work.month) {
        outcome.value.push({
            desc: work.desc,
            amount: work.amount,
            month: work.month,
        });
        clearOutcome();
    }
};
const clearOutcome = () => {
    work.desc = '';
    work.amount = '';
    work.month = '';
};  

const currentMonth = new Date().toISOString().substr(0,7);
const outcome  = ref([
    {desc: 'rent', amount: '30000', month: currentMonth},
    {desc: 'health tax', amount: '15000', month: currentMonth},
    {desc: 'mobile phone', amount: '4000', month: currentMonth},
    {desc: 'commuter pass', amount: '3780', month: currentMonth},
]);
const updateOutcome = (item) => {
    const index = outcome.value.findIndex(out => out.desc === item.desc);
    if (index !== -1) {
        outcome.value[index].amount = item.amount;
    }
    console.log(outcome.value);
};
const removeOutcome = (item) => {
    const index = outcome.value.findIndex(out => out.desc === item.desc);
    if (index !== -1) {
        outcome.value.splice(index, 1);
    }
};
</script>