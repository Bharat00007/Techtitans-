from django.shortcuts import render
from django.http import HttpResponse

import pyrebase
config = {
    'apiKey': "AIzaSyCzwtEBgF_kTuAhoi1e9hgt2Q8rlY8e80o",
    'authDomain': "techtitans-7b559.firebaseapp.com",
    'projectId': "techtitans-7b559",
    'storageBucket': "techtitans-7b559.appspot.com",
    'messagingSenderId': "764084088216",
    'appId': "1:764084088216:web:01892ee29faff6c3b18fed",
    'measurementId': "G-DF0EKYJVET",
    'databaseURL': 'https://techtitans-7b559-default-rtdb.firebaseio.com/' # Add this line
}
firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
database=firebase.database()
def postsign(request):
    channel_name= database.child('Data').child
    # Your view logic here
    return HttpResponse("This is the postsign view.")
# def postsign(request):
#     return render(request,"welcome.html")