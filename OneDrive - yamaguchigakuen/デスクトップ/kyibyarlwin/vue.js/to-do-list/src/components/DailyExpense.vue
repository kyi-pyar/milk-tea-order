<template>
    <v-container>
        <h1 class="text-h4 mb-4">Daily Expenses: ${{ totalExpenses }}&nbsp;(${{ selectedpayMethod }})</h1>
        <v-row>
            <v-col
                class="py-2"
                cols="12"
                
            >
                <p>Payment Method</p>

                <v-btn-toggle v-model="selectedpayMethod">
                <v-btn value="all">
                    ALL
                </v-btn>

                <v-btn value="Cash">
                    Cash
                </v-btn>

                <v-btn value="MUFG">
                    MUFG
                </v-btn>

                <v-btn value="paypay">
                    paypay
                </v-btn>

                <v-btn value="icoca">
                    icoca
                </v-btn>

                <v-btn value="paypayCreditCard">
                    paypayCreditCard
                </v-btn>

                <v-btn value="paidy">
                    paidy
                </v-btn>

                </v-btn-toggle>
            </v-col>
        </v-row>

        <v-card-text>
            <div class="text-title-small font-weight-black mb-1">Your's Daily Expenses</div>
            <v-row class="my-10">
                <v-col cols="2">
                    <v-text-field label="Date" hide-details="auto" variant="outlined" type="date" v-model="expense.date"></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        label="What did you buy?"
                        variant="outlined"
                        v-model="expense.things"
                    ></v-text-field>
                </v-col>
                <v-col cols="3">
                    <v-responsive class="mx-auto">
                        <v-text-field
                            v-model="expense.amount"
                            hide-details="auto"
                            label="$ Amount"
                            type = "number"
                            clearable
                        ></v-text-field>
                    </v-responsive>
                </v-col>
                <v-col cols="2">
                    <v-autocomplete 
                        :items="['Cash','MUFG','paypay', 'icoca','paypayCreditCard', 'paidy']"
                        label="payment method"
                        v-model="expense.payMethod"
                        @keydown.enter="addExpense"
                        >
                    </v-autocomplete>
                </v-col>
        
            </v-row>
            
            <v-row>
                <v-col cols="12">
                    <v-btn
                        class="text-none mb-4"
                        color="indigo-darken-3"
                        size="x-large"
                        variant="flat"
                        block
                        @click="addExpense"
                    >
                    Add Expense
                    </v-btn>

                    <v-btn
                        class="text-none"
                        color="grey-lighten-3"
                        size="x-large"
                        variant="flat"
                        block
                        @click="clearExpense"
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
                                <th class="text-left">Description</th>
                                <th class="text-left">Amount</th>
                                <th class="text-left">Payment Method</th>
                                <th class="text-left">Date</th>
                                <th class="text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in expenseList" :key="item.things">
                                <td>{{ item.things }}</td>
                                <td>${{ item.amount }}</td>
                                <td>{{ item.payMethod }}</td>
                                <td>{{ item.date }}</td>
                                <td><v-icon color="error" icon="mdi-delete" @click="deleteExpense(item)"></v-icon></td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-col>
            </v-row>
        </v-card-text>
    </v-container>
</template>
<script setup>

import{ ref, reactive, computed } from 'vue';

const today = new Date().toISOString().substr(0,10);

const totalExpenses = computed(()=>{
    if(selectedpayMethod.value === 'all') {
        return expenseList.value.reduce((a,b) =>a + Number(b.amount),0)
    } else {
        return expenseList.value
            .filter(item => item.payMethod === selectedpayMethod.value)
            .reduce((total, item) => total + Number(item.amount), 0)
    }   
})

const expenseList = ref([])
const selectedpayMethod  = ref('all')
const expense = reactive(
    {
        things:"",
        amount:0,
        date:today,
        payMethod:"",
    }
)
const clearExpense = () => {
    expense.things = ""
    expense.amount = ""
    expense.payMethod = ""
}

const addExpense=()=>{
    //console.log("hello")
    expenseList.value.push({
        things: expense.things,
        amount: expense.amount,
        date:expense.date,
        payMethod : expense.payMethod,
    })
    console.log(expenseList.value)
    expense.things = ""
    expense.amount = ""
    expense.date = today
    expense.payMethod = ""

}
const deleteExpense=(item) => {
    expenseList.value = expenseList.value.filter(expense => expense != item )
}
// const paypay = computed(() => 
//     expenseList.value
//         .filter(item => item.payMethod === 'paypay')
//         .reduce((total, item) => total + Number(item.amount), 0)
// );
</script>