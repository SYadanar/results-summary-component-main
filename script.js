var scoreContainer = document.getElementById('score-container');
let total = 0;

fetch('data.json')
    .then((Response) => Response.json())
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            data = json[i]
            scoreItem = document.createElement('div');
            scoreItem.innerHTML = `
            <div class="score-item ${data['color']} d-flex justify-content-between align-items-center fw-bold">
                <div class="d-flex">
                    <img alt="${data['category']} Icon" srcset="${data['icon']}">
                    <span class="px-2">${data['category']}</span>
                </div>
                <div>
                    <span class="res-mark">${data['score']}</span>
                    <span class="text-secondary"> / 100</span>
                </div>
            </div>
            `;
            scoreContainer.appendChild(scoreItem)
            total += data['score']
        }

        avg_total = Math.floor(total / json.length)
        document.getElementById('score').innerText = avg_total
    })