import angular from 'angular';

angular.module('myApp.reviews')
    .factory('reviewsService', factory);

function factory() {
    return new Service();
}

class Service {
    constructor() {
        this.reviews = [
            {
                id: '1',
                title: 'Хороший автомобильчик, и вот почему я раcскажу вам мои друзья',
                postedAt: '29.11.2014 21:24',
                author: 'Константин Константинопольский',
                car: {
                    slug: 'grande-punto',
                    vendor: 'Fiat',
                    model: 'Grande Punto',
                    year: '2006',
                    engine: '1.3 Multijet',
                    hp: '120',
                    gb: 'робот',
                },
                votes: {
                    common: {
                        exterior: 5,
                        comfort: 3,
                        safety: 5,
                        reliability: 4,
                        drivingCharacteristics: 3,
                    },
                    custom: {
                        good: ['Внешний вид', 'Стоимость содержания и обслуживания', 'Ликвидность на вторичном рынке'],
                        bad: ['Дальний свет', 'Мотор не едет на заявленные 175 лошадей'],
                    },
                },
                text: 'Неплохой городской автомобиль, экономичный двигатель, просторный (для своего класса) салон. Ездил на машине на большие расстояния (500 - 1000км) -впечатления хорошие: удобные кресла, низкий расход топлива по трассе, поломок не было. О плохом: не дешевые запчасти (!), низкий клиренс.'.repeat(2) // eslint-disable-line
            },
            {
                id: '2',
                title: 'Хороший автомобильчик, и вот почему я раcскажу вам мои друзья',
                postedAt: '29.11.2014 21:24',
                author: 'Константин Константинопольский',
                car: {
                    slug: 'grande-punto',
                    vendor: 'Fiat',
                    model: 'Grande Punto',
                    year: '2006',
                    engine: '1.3 Multijet',
                    hp: '120',
                    gb: 'робот',
                },
                votes: {
                    common: {
                        exterior: 5,
                        comfort: 3,
                        safety: 5,
                        reliability: 4,
                        drivingCharacteristics: 3,
                    },
                    custom: {
                        good: ['Внешний вид', 'Стоимость содержания и обслуживания', 'Ликвидность на вторичном рынке'],
                        bad: ['Дальний свет', 'Мотор не едет на заявленные 175 лошадей'],
                    },
                },
                text: 'Неплохой городской автомобиль, экономичный двигатель, просторный (для своего класса) салон. Ездил на машине на большие расстояния (500 - 1000км) -впечатления хорошие: удобные кресла, низкий расход топлива по трассе, поломок не было. О плохом: не дешевые запчасти (!), низкий клиренс.' // eslint-disable-line
            },
            {
                id: '3',
                title: 'Хороший автомобильчик, и вот почему я раcскажу вам мои друзья',
                postedAt: '29.11.2014 21:24',
                author: 'Константин Константинопольский',
                car: {
                    slug: 'grande-punto',
                    vendor: 'Fiat',
                    model: 'Grande Punto',
                    year: '2006',
                    engine: '1.3 Multijet',
                    hp: '120',
                    gb: 'робот',
                },
                votes: {
                    common: {
                        exterior: 5,
                        comfort: 3,
                        safety: 5,
                        reliability: 4,
                        drivingCharacteristics: 3,
                    },
                    custom: {
                        good: ['Внешний вид', 'Стоимость содержания и обслуживания', 'Ликвидность на вторичном рынке'],
                        bad: ['Дальний свет', 'Мотор не едет на заявленные 175 лошадей'],
                    },
                },
                text: 'Неплохой городской автомобиль, экономичный двигатель, просторный (для своего класса) салон. Ездил на машине на большие расстояния (500 - 1000км) -впечатления хорошие: удобные кресла, низкий расход топлива по трассе, поломок не было. О плохом: не дешевые запчасти (!), низкий клиренс.' // eslint-disable-line
            },
            {
                id: '4',
                title: 'Хороший автомобильчик, и вот почему я раcскажу вам мои друзья',
                postedAt: '29.11.2014 21:24',
                author: 'Константин Константинопольский',
                car: {
                    slug: 'grande-punto',
                    vendor: 'Fiat',
                    model: 'Grande Punto',
                    year: '2006',
                    engine: '1.3 Multijet',
                    hp: '120',
                    gb: 'робот',
                },
                votes: {
                    common: {
                        exterior: 5,
                        comfort: 3,
                        safety: 5,
                        reliability: 4,
                        drivingCharacteristics: 3,
                    },
                    custom: {
                        good: ['Внешний вид', 'Стоимость содержания и обслуживания', 'Ликвидность на вторичном рынке'],
                        bad: ['Дальний свет', 'Мотор не едет на заявленные 175 лошадей'],
                    },
                },
                text: 'Неплохой городской автомобиль, экономичный двигатель, просторный (для своего класса) салон. Ездил на машине на большие расстояния (500 - 1000км) -впечатления хорошие: удобные кресла, низкий расход топлива по трассе, поломок не было. О плохом: не дешевые запчасти (!), низкий клиренс.' // eslint-disable-line
            },
        ];
    }

    getReviews(limit) {
        return this.reviews.slice(0, limit);
    }
}

