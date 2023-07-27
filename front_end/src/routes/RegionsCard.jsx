import Card from '@mui/material/Card';


export default function RegionsCard({world}) {
  console.log('i am world', world);

  return (
  <Card>
    {world.regions.map((region) => {
      return (
        <div key={world._id}>
          <div>Region: {region.name}</div>
          <div>Type: {region.type}</div><br></br><br></br>
        </div>
        )
      })}
  </Card>
)
}

