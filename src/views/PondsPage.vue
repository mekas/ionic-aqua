<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Aqua Breeding</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kolam</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-fab vertical="bottom" horizontal="end" slot="fixed" router-link="/newpond">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <div>
        <h1>Kolam</h1>
        <!--
          You can swap pondAct which defined with nested mounted or pondAct2 which we nested axios get
         -->
        <ion-list v-for="pond in pondAct" :key="pond._id">
          <ion-item>
            <ion-card color="dark">
              <ion-card-content>
                <ion-grid>
                  {{ pond  }}
                  <ion-row class="ion-justify-content-between separator">
                    <ion-col size="3">
                      <h1>{{ pond.alias }}</h1>
                    </ion-col>
                    <ion-col size="2">
                      <div>
                        <ion-button color="success" class="top">Aktif</ion-button>
                      </div>
                    </ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>01-09-2022</ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>90 hari</ion-col>
                  </ion-row>
                  <ion-row>
                    <ion-col>200 ekor</ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </ion-item>

        </ion-list>

        <!--
        <strong>Ready to create an app?</strong> 
          <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        -->
      </div>
    </ion-content>


  </ion-page>
</template>

<script lang="ts">
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonCard,
  IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonFab, IonFabButton, IonIcon, IonButton
}
  from '@ionic/vue';

import {
  add
} from 'ionicons/icons'
import axios from 'axios'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PondsPage',
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList,
    IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonFab, IonFabButton, IonIcon,
    IonButton
  },
  setup() {
    const API = "http://jft.web.id/fishapi/api/"
    return {
      add, API
    }
  },
  data() {
    return { ponds: [], err: Object(), pondAct: [], ponds2: [], pondAct2: this.loadPondsByActivationsV2() }
  },
  async mounted() {
    this.ponds = await this.loadPonds()
    for (const pond of this.ponds) {
      let act = await this.loadPondActivations(pond['_id'])
      this.pondAct.push({ ...pond, ...act })
    }

  }
  , methods: {
    async loadPondActivations(id: string) {
      let api_path = this.API + "ponds/status/" + id
      let activation = await axios.get(api_path);
      return activation.data
    },
    async loadPonds() {
      let api_path = this.API + "ponds"
      let ponds = await axios.get(api_path)
      return ponds.data
    },
    loadPondsByActivationsV2() {
      let api_path = this.API + "ponds"
      axios.get(api_path)
        .then(response => {
          // handle success
          this.ponds2 = response.data
          for (const pond of this.ponds2) {
            let api2 = this.API + "ponds/status/" + pond._id
            this.pondAct2 = []
            axios.get(api2)
              .then(response2 => {
                this.pondAct2.push(response2.data)
              }).catch(error2 => {
                console.log(error2.data)
              })
            }
          return this.pondAct2
        })
        .catch(error => {
          // handle error
          //console.log(error.data);
          this.err['err_pond'] = error.data
        })
        .finally(function () {
          // always executed

        });
    },
    dayEllapsed(date: any) {
      //console.log(msg)
    },
  }
});
</script>

<style scoped>
ion-card {
  --ion-grid-column-padding: 4px;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  width: 100% !important;
}

.top {
  position: absolute;
  top: 0px
}

.separator {
  border-bottom: #8c8c8c;
}

#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
