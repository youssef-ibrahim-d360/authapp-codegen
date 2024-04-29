import { ensurePlasmicAppUser } from '@plasmicapp/auth-api';

export default async function handler(req, res) {
  const { email, appSecret } = req.body;

  const result = await ensurePlasmicAppUser({
    email,
    appSecret
  });

  if (result.error) {
    res.status(500).json({ error: result.error });
  } else {
    const { user: plasmicUser, token: plasmicUserToken } = result;
    res.status(200).json({ user: plasmicUser, token: plasmicUserToken });
  }
}