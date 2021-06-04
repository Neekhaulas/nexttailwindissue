import Head from 'next/head'
import ComponentBlue from '../components/ComponentBlue'
import ComponentYellow from '../components/subfolder/ComponentYellow'
import ComponentGreen from '../components/subfolder/subfolder2/ComponentYellow'

export default function Home() {
  return (
    <div>
      <div className="bg-red-500">
        <ComponentBlue />
      </div>
      <div className="bg-green-400">
        <ComponentYellow />
      </div>
      <div className="bg-black">
        <ComponentGreen />
      </div>
    </div>
  )
}
