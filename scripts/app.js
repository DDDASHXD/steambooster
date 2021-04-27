var nav = new Vue({
    el: '#nav',
    data: {
        logo: 'S',
        links: [
            { text: 'Home', href: '#'},
            { text: 'About', href: '#'},
            { text: 'Pricing', href: '#'},
        ],
        contacthref: '#',
        contacttext: 'Contact',
    }
})

var hero = new Vue({
    el: '#hero',
    data: {
        title: 'Steam Booster',
        subtitle: 'Boost your hours in your favorite games,<br>Always at an affordable price.',
        leftButton: 'Why choose us?',
        rightButton: 'Pricing'
    }
})

var featureset = new Vue({
    el: '#featureset',
    data: {
        title: 'Why choose Steam Booster?',
        features: [
            { iconLocation: '../style/svg/cog.svg', title: 'Lorem ipsum', subtitle: 'dolor sit amet, consectetur adipiscing elit.' },
            { iconLocation: '../style/svg/lightning.svg', title: 'Lorem ipsum', subtitle: 'dolor sit amet, consectetur adipiscing elit.' },
            { iconLocation: '../style/svg/money.svg', title: 'Lorem ipsum', subtitle: 'dolor sit amet, consectetur adipiscing elit.' }
        ]
    }
})

var monthlyActive = true;
var yearlyActive = false;

var pricing = new Vue({
    el: '#pricing',
    data: {
        title: 'Pricing',
        monthlyText: 'Billed Monthly',
        monthlyActive: monthlyActive,
        yearlyText: 'Billed Yearly',
        yearlyActive: yearlyActive,

        checkIcon: '../style/svg/check.svg',

        //Basic plan
        basicIcon: '../style/svg/paperplane.svg',
        basicTitle: 'Basic',
        basicSubtitle: 'Essential features',
        basicFeatures: [
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
        ],
        basicPrice: '$9.99',
        basicButton: 'Choose Basic plan',

        //Pro plan
        proIcon: '../style/svg/airplane.svg',
        proTitle: 'Pro',
        proSubtitle: 'Advanced features',
        proFeatures: [
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
        ],
        proPrice: '$19.99',
        proButton: 'Choose Pro plan',

        //elite plan
        eliteIcon: '../style/svg/rocket.svg',
        eliteTitle: 'Elite',
        eliteSubtitle: 'All the features',
        eliteFeatures: [
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
            { text: 'Lorem ipsum dolor sit amet' },
        ],
        elitePrice: '$24.99',
        eliteButton: 'Choose Elite plan',
    }
})

var oldScrollY;

document.addEventListener("scroll", function() {
    if (window.scrollY > 0 ) {
        $('.scroll').addClass('hidden')
    } else if (window.scrollY < 1 ) {
        $('.scroll').removeClass('hidden')
    }

    if ( window.scrollY > oldScrollY ) {
        $('.nav').addClass('hidden')
    } else if ( window.scrollY < oldScrollY) {
        $('.nav').removeClass('hidden')
    }

    oldScrollY = window.scrollY;
});

function toggleBilling(nr) {
    console.log('Working!')
    if ( nr == 0 ) {
        pricing.monthlyActive = true;
        pricing.yearlyActive = false;
    } else if ( nr == 1 ) {
        pricing.monthlyActive = false;
        pricing.yearlyActive = true;
    }
}