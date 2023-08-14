function profile() {
    let profile = JSON.parse(localStorage.getItem('userCheckLogin'));
    
            let pdata = `
                <span class="fw-semibold d-block">${profile.name}</span>
                <small class="text-muted">${profile.email}</small>
            `
            document.getElementById('profile').innerHTML = pdata;
}
profile();