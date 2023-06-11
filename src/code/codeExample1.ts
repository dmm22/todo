const codeExample1 = `import { SetStateAction, useState } from "react"
import { Coin } from "@/pages/cryptocurrency"
import coinList from "../data/coinList.json"
import CoinSearchResult from "./CoinSearchResult"

interface CoinSearchListInterface {
  setCurrentCoin: React.Dispatch<SetStateAction<Coin | null>>
}

export default function CoinSearchList({
  setCurrentCoin,
}: CoinSearchListInterface) {
  const [filteredCoins, setFilteredCoins] = useState<Coin>()
  const [input, setInput] = useState("")

  const searchResults =
    coinList
      .filter(({ coinName }) =>
        coinName.toLowerCase().includes(input.toLowerCase())
      )
      ?.slice(0, 10) || []

  return (
    <div>
      <input onChange={e => setInput(e.target.value)} />
      {searchResults.map((coin, i) => (
        <div onClick={() => setCurrentCoin(coin)} key={i}>
          <CoinSearchResult coin={coin} />
        </div>
      ))}
    </div>
  )
}
`

export default codeExample1
