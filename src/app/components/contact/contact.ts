import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  sendMessage(event: Event, name: string, email: string, message: string) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      window.alert('Please fill in all fields before sending your message.');
      return;
    }

    console.log('Contact form submitted', {
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    window.alert('Thanks for your message! I will get back to you soon.');
  }
}
