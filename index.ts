const formatWhatsAppUrl = (phoneNumber: string|number, message?: string): string => {
    const cleanedNumber = typeof phoneNumber === 'number' ? phoneNumber.toString().replace(/[^\d]/g, '') : phoneNumber.replace(/[^\d]/g, '');
    return `https://wa.me/${cleanedNumber}${message ? `?text=${encodeURIComponent(message.trim())}` : ''}`;
};

export default formatWhatsAppUrl;
