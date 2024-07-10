from django.shortcuts import render, redirect
from .forms import ContactForm
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse

def index(request):
   return render(request, 'index.html')

def about(request):
   return render(request, 'about.html')

def products(request):
   return render(request, 'products.html')

def contact(request):
   return render(request, 'contact.html')

def privacypolicy(request):
   return render(request, 'privacy-policy.html')

def termsconditions(request):
   return render(request, 'terms&conditions.html')

def contact(request):
	if request.method == 'POST':
		form = ContactForm(request.POST)
		if form.is_valid():
			subject = "Website Inquiry" 
			body = {
			'first_name': form.cleaned_data['first_name'], 
			'last_name': form.cleaned_data['last_name'], 
			'email': form.cleaned_data['email_address'], 
			'message':form.cleaned_data['message'], 
			}
			message = "\n".join(body.values())

			try:
				send_mail(subject, message, 'admin@example.com', ['admin@example.com']) 
			except BadHeaderError:
				return HttpResponse('Invalid header found.')
			return redirect ("main:homepage")
      
	form = ContactForm()
	return render(request, "main/contact.html", {'form':form})