const TransactionReducer = (state, action) =>{
        switch (action.type) {
            case 'ADD-TRANSACTION': 
                return [action.payload, ...state]
            case 'DEL-TRANSACTION':
                return [
                   ...state
                        .filter(transaction => transaction.id !== action.payload)
                ]
            default:
                return state;
        };
}

export default TransactionReducer;