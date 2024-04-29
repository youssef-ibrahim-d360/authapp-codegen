import { ensurePlasmicAppUser } from '@plasmicapp/auth-api';

export default async function handler(req, res) {
  const { email, appSecret } = req.body;

  const result = await ensurePlasmicAppUser({
    email: "youssefhood@gmail.com", 
    appSecret: 'kVeHgXahpOXzUrDOJurWlHjYqSKn8EbYHOC5w6Ff1BU3lMvPtCuuP3my7amMA3qUIZWpjTz2c7XS4vEcSs7Pw'
  
  });

  if (result.error) {
    res.status(500).json({ error: result.error });
  } else {
    const { user: plasmicUser, token: plasmicUserToken } = result;
    res.status(200).json({ user: plasmicUser, token: plasmicUserToken });
  }
}