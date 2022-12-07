import _ from 'underscore';//para el _.shuffle

// Esta función crea un nuevo deck
/**
 * 
 * @param {array<string>} tiposDeCartas 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */
export const crearDeck = (tiposDeCartas,tiposEspeciales) => {
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
 