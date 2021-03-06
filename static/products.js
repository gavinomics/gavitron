


const products = [
    {
        art: '/static/images/173-cute-bunns.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Cute Bunns',
        printSize: '20x16',
        id: '173',
        price: 16,
        bunnies: 'yes',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: true,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/262-Apple Strudel.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Apple Strudel',
        printSize: '13.5x10',
        id: '262',
        price: 16,
        bunnies: 'yes',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/265-fiori_de_castello.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Fiori de Castello',
        printSize: "24.5x28",
        id: '265',
        price: 16,
        bunnies: 'no',
        flowers: 'yes',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1

    },
    {
        art: '/static/images/174-Enter-at-the-old-gate.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Enter at the Old Gate',
        printSize: '24x35.75',
        id: '174',
        price: '$20',
        bunnies: 'no',
        flowers: 'yes',
        cats: 'no',
        gates: 'yes',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/102-blue_checked_napkin3.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Blue Checked Napkin',
        printSize: '20x16',
        id: '102',
        price: 16,
        bunnies: 'no',
        flowers: 'yes',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/176-tulip-take-out.jpg',
        shape: 'square',
        detailShape: 'detailViewImg-square',
        title: 'Tulip Take-Out',
        printSize: '12x12',
        id: '176',
        price: 16,
        bunnies: 'yes',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/263-Peach-Cobbler.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Peach Cobler',
        printSize: '13.5x10',
        id: '263',
        price: 16,
        bunnies: 'yes',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/178-garden-rendezvous.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Garden Rendezvous',
        printSize: '16x20',
        id: '178',
        price: 16,
        bunnies: 'yes',
        flowers: 'yes',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/150-southern_hospitality.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Southern Hospitality',
        printSize: '13.5x10',
        id: '150',
        price: 16,
        bunnies: 'no',
        flowers: 'yes',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/166-boxed_roses2.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'yes',
        cats: 'no',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/169-a_sunny_good_day.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '169',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'yes',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/lazy_days.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'yes',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/pot_holder.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'yes',
        gates: 'no',
        holiday: 'no',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/winter_tails.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Winter Tails',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'yes',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/bountiful_blessings.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'yes',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/making_memories.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'yes',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/naughty_or_nice.jpg',
        shape: 'tall',
        detailShape: 'detailViewImg-tall',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'yes',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },
    {
        art: '/static/images/thank_you_santa.jpg',
        shape: 'wide',
        detailShape: 'detailViewImg-wide',
        title: 'Boxed Roses',
        printSize: '13.5x10',
        id: '166',
        price: 16,
        bunnies: 'no',
        flowers: 'no',
        cats: 'no',
        gates: 'no',
        holiday: 'yes',
        inCart: false,
        subTotal: 0,
        quantity: 1
    },]