import BlockTransition from './Animated'

interface titleProps {
  title: string
  fontSize?: string
}
const BlockTitle: React.FC<titleProps> = (props) => {
  return (
    <div>
      {props.fontSize === 'text-lg' ? (
        <h2 className='font-semibold text-lg mb-2'>{props.title}</h2>
      ) : (
        <BlockTransition>
          <h2 className='font-semibold text-2xl mb-4'>{props.title}</h2>
        </BlockTransition>
      )}
    </div>
  )
}

export default BlockTitle
