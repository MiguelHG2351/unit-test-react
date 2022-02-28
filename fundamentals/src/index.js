const cities = ['NYC', 'SF', 'LA'];

const randomString = () => {
    const randomIndex = cities[Math.floor(Math.random() * cities.length)];

    return randomIndex;
}

module.exports = randomString;
