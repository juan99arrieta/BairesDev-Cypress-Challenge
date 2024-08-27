module.exports = {
    PURCHASEPAGE:{
        URL: "https://blazedemo.com/index.php",
        TITTLE_MESSAGE_TEXT: "h2",
        RESERVATION_AIRLINE_TEXT: "p:contains('Airline')",
        RESERVATION_FLIGHT_NUMBER_TEXT: "p:contains('Airline')",
        RESERVATION_PRICE_TEXT: "p:contains('Price')",
        RESERVATION_FEES_TEXT: "p:contains('Arbitrary Fees and Taxes:')",
        RESERVATION_TOTAL_COST_TEXT: "p:contains('Total Cost:')",
        PURCHASE_FORM: "form[method='POST']",
        PURCHASE_FORM_NAME_INPUT: "#inputName",
        PURCHASE_FORM_ADRESS_INPUT: "#address",
        PURCHASE_FORM_CITY_INPUT: "#city",
        PURCHASE_FORM_STATE_INPUT: "#state",
        PURCHASE_FORM_ZIPCODE_INPUT: "#zipCode",
        PURCHASE_FORM_CARD_TYPE_INPUT: "#cardType",
        PURCHASE_FORM_VISA_TYPE_OPTION:"option[value='visa']",
        PURCHASE_FORM_AMEX_TYPE_OPTION:"option[value='amex']",
        PURCHASE_FORM_DINERS_TYPE_OPTION:"option[value='dinersclub']",
        PURCHASE_FORM_CARD_NUMBER_INPUT: "#creditCardNumber",
        PURCHASE_FORM_CARD_MONTH_INPUT: "#creditCardMonth",
        PURCHASE_FORM_CARD_YEAR_INPUT: "#creditCardYear",
        PURCHASE_FORM_CARD_NAME_INPUT: "#nameOnCard",
        PURCHASE_FORM_REMEMBER_CHECKBOX: "#rememberMe",
        PURCHASE_FORM_PURCHASE_FLIGHT_BUTTON: "input[type='submit']"
    }
}