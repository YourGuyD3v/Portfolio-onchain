import Form from "./utils/ui/Form";
import { tokens } from "./utils/TokenDetails";

export function RupayContent() {

  const handleSubmit = () => {
    console.log('Form submitted!')
  }

    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col gap-4">
            <Form
      topic="Deposit Tokens"
      description="Deposit your tokens and get RUP minted."
      buttonName="Deposit and Mint"
      submitButton="Confirm"
      amount1Label="Collateral amount"
      amount2Label="Amount to mint"
      tokens={tokens}
      onSubmit={handleSubmit}
    />
            <Form
      topic="Redeem Tokens"
      description="Burn RUP tokens and redeem Collateral."
      buttonName="Burn and Redeem"
      submitButton="Confirm"
      amount1Label="Amount to burn"
      amount2Label="Collateral amount"
      tokens={tokens}
      onSubmit={handleSubmit}
    />
        </div>
      </div>
    )
}