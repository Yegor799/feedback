export default function FeedbackOptions({ options, onLeaveFeedback }) {
        return (
        options.map((option, index) => {
            return (
                <button
                    key={index}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}    
                >
                    {option}
                </button>
            )
        })
    )
}