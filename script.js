
document.addEventListener('DOMContentLoaded', () => {
    // DOM Element References via getElementById and querySelector
    const submitBtn = document.getElementById('submitBtn');
    const copySummaryBtn = document.getElementById('copySummaryBtn');
    const copyFeedback = document.getElementById('copyFeedback');
    const outputCard = document.getElementById('outputCard');
    const randomIdSpan = document.getElementById('outRandomId');

    
    randomIdSpan.textContent = Math.floor(1000 + Math.random() * 9000);

    submitBtn.addEventListener('click', () => {
        // Read input values using document.getElementById
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const address = document.getElementById('address').value.trim();
        const course = document.getElementById('course').value.trim();
        const yearLevel = document.getElementById('yearLevel').value;
        const birthDate = document.getElementById('birthDate').value;
        const hobbies = document.getElementById('hobbies').value.trim();

        const favColorSelect = document.getElementById('favColorSelect');
        const accentColor = favColorSelect.value || '#3b82f6';

        const selectedGenderRadio = document.querySelector('input[name="gender"]:checked');
        const gender = selectedGenderRadio ? selectedGenderRadio.value : 'Not specified';

        if (!fullName || !email) {
            alert('Please enter at least your Full Name and Email Address.');
            document.getElementById('fullName').focus();
            return;
        }

        document.documentElement.style.setProperty('--accent-primary', accentColor);
        document.documentElement.style.setProperty('--accent-glow', hexToRgba(accentColor, 0.3));

        document.getElementById('outFullName').textContent = fullName;
        document.getElementById('outEmailDisplay').textContent = email;
        document.getElementById('outAge').textContent = age || '--';
        document.getElementById('outPhone').textContent = phone || 'Not provided';
        document.getElementById('outAddress').textContent = address || 'No address provided';
        document.getElementById('outCourseBadge').textContent = course || 'Course / Program';
        document.getElementById('outYearBadge').textContent = yearLevel || 'Year Level';
        document.getElementById('outBirthDate').textContent = birthDate || '--';
        document.getElementById('outGender').textContent = gender;
        document.getElementById('outHobbiesDisplay').textContent = hobbies ? `Hobbies: ${hobbies}` : 'Hobbies: None listed';

        const initials = getInitials(fullName);
        document.getElementById('outAvatarInitials').textContent = initials;

        outputCard.classList.remove('default-state');
        copySummaryBtn.removeAttribute('disabled');
        copyFeedback.textContent = 'Information successfully displayed!';
        setTimeout(() => {
            copyFeedback.textContent = '';
        }, 3000);
    });

    copySummaryBtn.addEventListener('click', () => {
        const summaryText = `--- MY INFORMATION ---
Full Name: ${document.getElementById('outFullName').textContent}
Email: ${document.getElementById('outEmailDisplay').textContent}
Age: ${document.getElementById('outAge').textContent}
Phone: ${document.getElementById('outPhone').textContent}
Address: ${document.getElementById('outAddress').textContent}
Course: ${document.getElementById('outCourseBadge').textContent}
Year Level: ${document.getElementById('outYearBadge').textContent}
Birth Date: ${document.getElementById('outBirthDate').textContent}
Favorite Color: ${document.getElementById('favColorSelect').options[document.getElementById('favColorSelect').selectedIndex]?.text || 'Not selected'}
Hobbies: ${document.getElementById('outHobbiesDisplay').textContent}
Gender: ${document.getElementById('outGender').textContent}
----------------------`;

        navigator.clipboard.writeText(summaryText).then(() => {
            copyFeedback.textContent = 'Copied summary to clipboard!';
            setTimeout(() => {
                copyFeedback.textContent = '';
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    function getInitials(name) {
        const parts = name.split(' ').filter(Boolean);
        if (parts.length === 0) return 'U';
        if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
        return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    }

    function hexToRgba(hex, alpha) {
        let c = hex.replace('#', '');
        if (c.length === 3) {
            c = c.split('').map(char => char + char).join('');
        }
        const num = parseInt(c, 16);
        return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
    }
document.addEventListener('DOMContentLoaded', () => {
    // DOM Element References via getElementById and querySelector
    const submitBtn = document.getElementById('submitBtn');
    const copySummaryBtn = document.getElementById('copySummaryBtn');
    const copyFeedback = document.getElementById('copyFeedback');
    const outputCard = document.getElementById('outputCard');
    const randomIdSpan = document.getElementById('outRandomId');

    
    randomIdSpan.textContent = Math.floor(1000 + Math.random() * 9000);

    submitBtn.addEventListener('click', () => {
       
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const favColorSelect = document.getElementById('favColorSelect');
        const accentColor = favColorSelect.value || '#3b82f6';
        const favoriteColorName = favColorSelect.options[favColorSelect.selectedIndex]?.text || 'Not Selected';
        const address = document.getElementById('address').value.trim();
        const course = document.getElementById('course').value.trim();
        const yearLevel = document.getElementById('yearLevel').value;
        const birthDate = document.getElementById('birthDate').value;
        const hobbies = document.getElementById('hobbies').value.trim();

       

        const selectedGenderRadio = document.querySelector('input[name="gender"]:checked');
        const gender = selectedGenderRadio ? selectedGenderRadio.value : 'Not specified';

        if (!fullName || !email) {
            alert('Please enter at least your Full Name and Email Address.');
            document.getElementById('fullName').focus();
            return;
        }

        document.documentElement.style.setProperty('--accent-primary', accentColor);
        document.documentElement.style.setProperty('--accent-glow', hexToRgba(accentColor, 0.3));

        document.getElementById('outFullName').textContent = fullName;
        document.getElementById('outEmailDisplay').textContent = email;
        document.getElementById('outAge').textContent = age || '--';
        document.getElementById('outPhone').textContent = phone || 'Not provided';
        document.getElementById('outFavoriteColor').textContent = favoriteColorName;
        document.getElementById('outAddress').textContent = address || 'No address provided';
        document.getElementById('outCourseBadge').textContent = course || 'Course / Program';
        document.getElementById('outYearBadge').textContent = yearLevel || 'Year Level';
        document.getElementById('outBirthDate').textContent = birthDate || '--';
        document.getElementById('outGender').textContent = gender;
        document.getElementById('outHobbiesDisplay').textContent = hobbies ? `Hobbies: ${hobbies}` : 'Hobbies: None listed';
        document.getElementById('outColorLabel').textContent = `Favorite Color: ${favoriteColorName}`;

        const initials = getInitials(fullName);
        document.getElementById('outAvatarInitials').textContent = initials;

        outputCard.classList.remove('default-state');
        copySummaryBtn.removeAttribute('disabled');
        copyFeedback.textContent = 'Information successfully displayed!';
        setTimeout(() => {
            copyFeedback.textContent = '';
        }, 3000);
    });

    copySummaryBtn.addEventListener('click', () => {
        const summaryText = `--- MY INFORMATION ---
Full Name: ${document.getElementById('outFullName').textContent}
Email: ${document.getElementById('outEmailDisplay').textContent}
Age: ${document.getElementById('outAge').textContent}
Phone: ${document.getElementById('outPhone').textContent}
Favorite Color: ${document.getElementById('outFavoriteColor').textContent}
Address: ${document.getElementById('outAddress').textContent}
Course: ${document.getElementById('outCourseBadge').textContent}
Year Level: ${document.getElementById('outYearBadge').textContent}
Birth Date: ${document.getElementById('outBirthDate').textContent}

Hobbies: ${document.getElementById('outHobbiesDisplay').textContent}
Gender: ${document.getElementById('outGender').textContent}
----------------------`;

        navigator.clipboard.writeText(summaryText).then(() => {
            copyFeedback.textContent = 'Copied summary to clipboard!';
            setTimeout(() => {
                copyFeedback.textContent = '';
            }, 3000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

    function getInitials(name) {
        const parts = name.split(' ').filter(Boolean);
        if (parts.length === 0) return 'U';
        if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
        return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
    }

    function hexToRgba(hex, alpha) {
        let c = hex.replace('#', '');
        if (c.length === 3) {
            c = c.split('').map(char => char + char).join('');
        }
        const num = parseInt(c, 16);
        return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
    }
})
})
