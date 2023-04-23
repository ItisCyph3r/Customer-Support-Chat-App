import React from 'react'

export const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const options: any = {
        month: 'long',
        day: 'numeric',
        year: 'numeric' // or '2-digit' if you want a two-digit year representation
    };
        
    return date.toLocaleDateString('en-US', options);    
}

export const formatTime = (dateString: any) => {
    const date = new Date(dateString); // replace with your date object
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
}