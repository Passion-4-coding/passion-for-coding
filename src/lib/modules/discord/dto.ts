interface IMember {
  avatar_url: string; 
  discriminator: string
  id: string
  status: string
  username: string;
}

export interface IChannel {
  id: string;
  name: string;
  instant_invite: string;
  members: IMember[];
  presence_count: number;
}