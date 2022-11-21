const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetUser = async () => {
  const res= await fetch(url);
  const data = res.json();
  return data
};

export default fetUser;
