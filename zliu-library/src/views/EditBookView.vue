<template>
    <div class="edit-book-container">
      <h1>Edit Book</h1>
      <form @submit.prevent="editBook">
        <div class="form-group">
          <label for="isbn">ISBN:</label>
          <input type="text" v-model="isbn" id="isbn" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" v-model="name" id="name" class="form-control" required />
        </div>
        <div class="button-group">
          <button type="submit" class="btn btn-primary">Update Book</button>
          <button type="button" @click="deleteBook" class="btn btn-danger">Delete Book</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
  import db from '../firebase/init';
  
  const isbn = ref('');
  const name = ref('');
  const route = useRoute();
  const router = useRouter();
  const refId = ref('');
  
  const editBook = async () => {
    try {
      const isbnNumber = Number(isbn.value);
      if (isNaN(isbnNumber)) {
        alert('ISBN must be a valid number');
        return;
      }
  
      await setDoc(doc(db, "books", refId.value), {
        isbn: isbnNumber,
        name: name.value
      });
  
      alert('Book updated successfully!');
      router.push('/BookList');
    } catch (error) {
      console.error('Error updating book: ', error);
    }
  };
  
  const deleteBook = async () => {
    try {
      await deleteDoc(doc(db, "books", refId.value));
      alert('Book deleted successfully!');
      router.push('/BookList');
    } catch (error) {
      console.error('Error deleting book: ', error);
    }
  };
  
  // Fetch the current book details when loading the page
  const fetchBook = async () => {
    const bookId = route.params.bookId;
    const docRef = doc(db, "books", bookId);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      const data = docSnap.data();
      isbn.value = data.isbn;
      name.value = data.name;
      refId.value = docSnap.id;
    } else {
      console.log("No such document!");
    }
  };
  
  fetchBook();
  </script>
  
  <style scoped>
  .edit-book-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  .button-group {
    display: flex;
    justify-content: space-between;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
  }
  </style>
  