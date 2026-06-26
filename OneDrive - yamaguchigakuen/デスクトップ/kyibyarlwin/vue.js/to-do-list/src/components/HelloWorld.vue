<template>
  <v-container>
    <h1>To Do List</h1>
    <v-text-field label="What do you want to do Today?" variant="solo-filled" v-model="work" @keydown.enter="addwork()"></v-text-field>
    <v-btn rounded="xl" size="x-large" block @click="addwork()">To do</v-btn>
    <!-- work : {{work}} -->
    <v-row class="my-10">
      <v-col cols="12">
        <v-table striped="odd">
          <thead>
            <tr>
              <th class="text-left">
                Description:
              </th>
              <th class="text-left">
                Status:
              </th>
              <th class="text-left">
                Action:
              </th>
              <th>
                <div v-if="deletedWork.length <= 0">
                  <v-icon color="primary" @click="undoItem()" icon="mdi-undo" disabled></v-icon>
                </div>
                <div v-else>
                  <v-icon color="primary" @click="undoItem()" icon="mdi-undo" ></v-icon>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in works" :key="item.desc">
              <td>{{ item.desc }}</td>
              <td>{{ item.status}}</td>
              <td>
                <v-autocomplete 
                  :items="['joining', 'finished', 'waiting to join']"
                  label="status condition"
                  @update:model-value="(val)=>changeStatus(val,item)">
                </v-autocomplete>
              </td>
              <!-- <td><v-btn rounded="xl" size="small" block @click="removeWork(item)">Remove</v-btn></td> -->
              <td>
                <v-icon color="error" @click="removeWork(item)" icon="mdi-delete"></v-icon>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>To Do List</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      What do you want to do Today?
    </v-card-subtitle>

    <v-card-text>
      <div>v-for="(item,index) in works" :key="index" Description:{{ item.desc }} => Status: {{ item.status}} </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text="To Do" @click="addwork()"></v-btn>

    </v-card-actions>
  </v-card> -->
  
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    works : [{
              desc:"pay college fee",
              status:"finished"
            },
            {
              desc: 'attend online class',
              status:"joining"
            },
            {
             desc: "pay home-rent",
             status: 'waiting to join'
            },
            {
              desc: "take a bath",
              status:'waiting to join'
            },
            {
              desc:'go work',
              status:'waiting to join'
            }],
    work:" ",//for clear the data in text field
    deletedWork:[]
  }),

  methods:{
    addwork(){
      //console.log("this is work")
      this.works.push({desc:this.work,status:"waiting to join"})
      this.work = ''//for clear the data in text field
    },
    changeStatus(val,item){
      //console.log(item)
      item.status=val
    },
    removeWork(item){
      console.log(item)
      this.works=this.works.filter(job => job != item)
      this.deletedWork.push(item)
    },
    undoItem(){
      this.works.push(this.deletedWork.pop())
    },
  }
}
</script>
