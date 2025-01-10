<template>
  <v-app>
    <v-main>
      <div class="container">
        <div class="content">
          <h1 class="title">Add New Subscribers</h1>

          <div class="upload-section">
            <!-- Tekst u bijelom okviru-->
            <div class="drop-area">
              <div class="drop-box">
                <p class="drag-drop-text">Drag & Drop or</p>
                <button class="choose-file-btn">Choose file</button>
                <p class="upload-text">to upload</p>
              </div>
            </div>

            <!-- or dio teksta -->
            <p class="or-text">or</p>

            <!-- Import URL-->
            <div class="url-import">
              <p class="import-text">Import from URL</p>
              <!-- Add file URL-a -->
              <input type="url" placeholder="Add file URL" class="url-input" />
            </div>

            <!-- Button Cancel Import -->
            <div class="cancel-btn-container">
              <button class="cancel-btn">Cancel</button>
              <button class="import-btn">Import</button>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
// Komponenta se zove "AddNew"
export default {
  name: "AddNew",
};
</script>

<style scoped>
/* Sivi dio ekrana*/
.container {
  background-color: #D5D5D5;
  min-height: 100vh; /* prekriva cijeli ekran */
  display: flex; /* centriranje sadržaja */
  justify-content: center;
  align-items: center;
}

/* Bijeli dio ekrana */
.content {
  background-color: white;
  border-radius: 30px;
  padding: 40px;
  max-width: 1000px; /* Maksimalna širina */
  width: 100%; /*koliko je sirok prozor*/

}
/* Add New Subscribers*/
.title {
  font-family: "Jomolhari-Regular",sans-serif;
  font-size: 36px; /* Veličina fonta */
  color: #000000;
}

/* Sekcija za uploadanje datoteka */
.upload-section {
  display: flex; /* Flexbox za organiziranje elemenata */
  flex-direction: column; /* kako da elementi koje sam stavila u bijeli budu posloženi */
  margin-top: 40px; /* razmak od svakog elemenata */
}

/*Plavi dio*/
.drop-area {
  background: linear-gradient(#99BADB, #7DA1C5, #577FA7, #0B3A6A); /* gradijent boja */
  border-radius: 30px; /* kut je zaobljen */
  padding: 10px; /* razmak od bijelog prostora*/

}
/*Bijeli dio koji se nalazi u plavom dijelu */
.drop-box {
  background-color: white;
  border-radius: 30px; /* kut je zaobljen */
  padding: 40px; /* koliko je razmaka unutar*/
  text-align: center; /* Centriranje teksta */
}

/* Drag & Drop or */
.drag-drop-text {
  font-size: 20px;
  color: #000000;
  display: inline-block; /* vako stavljamo plavo + crno u isti red */
}

/* Choose file */
.choose-file-btn {
  color:  #577FA7;
  padding: 10px 20px; /* Unutarnji razmak */
  font-size: 20px;
  font-weight: bold;
}
/* to upload*/
.upload-text {
  font-size: 20px;
  color: #000000;
  display: inline-block; /* poravnanje cilog teksta u isti red */
}


/* or */
.or-text {
  margin-top: 30px;
  font-size: 20px;
  color: #000000;
  text-align: center;
}

/* Import from URL*/
.url-import {
  margin-top: 30px;
  font-size: 20px;
  color:  #000000;
}

/* Add file URL */
.url-input {
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  max-width: 700px; /* koliko je velika kocka */
  font-size: 16px;
  border-radius: 5px; /* zaobljeni kutevi */
  border: 2px solid #D5D5D5; /* okvir oko teksta */
}

/* Cancel i Import */
.cancel-btn-container {
  margin-top: 30px;
  display: flex; /* raspoređivanje u prostoru */
  justify-content: flex-end; /* sadrzaj je na desnoj strani */
  gap: 10px; /*razmak izmedu dva dugma */
}

/* Dugme za otkazivanje */
.cancel-btn {
  background-color: #D5D5D5;
  color: #000000;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
}

/* Import dugme */
.import-btn {
  background-color: #577FA7;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
}


/* Responsive dizajn za manje ekrane */
@media (max-width: 768px) {
  .container {
    padding: 10px; /* Manji razmak oko kontejnera */
  }

  .content {
    padding: 20px; /* Manji razmak u sadržaju */
  }

  .title {
    font-size: 28px; /* Manja veličina naslova */
  }

  .drag-drop-text,
  .choose-file-btn,
  .upload-text,
  .import-text,
  .url-input,
  .import-btn {
    font-size: 16px; /* Manja veličina fonta za mobilne uređaje */
  }
}
</style>


