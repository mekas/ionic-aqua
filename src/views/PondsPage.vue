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
        <ion-list>
          <ion-list-header>
            <h1>Kolam</h1>
          </ion-list-header>
          <ion-item>
            <ion-card color="dark">
              <ion-card-content>
                <ion-grid>
                  <ion-row class="ion-justify-content-between separator">
                    <ion-col size="3">
                      <h1>Alpha</h1>
                    </ion-col>
                    <ion-col size="2">
                      <ion-button color="success" class="top">Aktif</ion-button>
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
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonCard,
  IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonFab, IonFabButton, IonIcon
}
  from '@ionic/vue';

import {
  add
} from 'ionicons/icons'

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PondsPage',
  components: {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader,
    IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonItem, IonFab, IonFabButton, IonIcon
  },
  setup() {
    return {
      add
    }
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
