const url = "https://api.anisage.net/"

export async function getDetailFilmForSEO(params: {
  identifier: string;
}): Promise<any> {
  const { identifier } = params;
  try {
    const { data } = await fetch(`${url}films/get-one/${identifier}`).then(
      (res) => res.json()
    );

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export async function getDetailEpisodeForSEO(params: {
  idEpisode: string;
}): Promise<any> {
  const { idEpisode } = params;
  try {
    const { data } = await fetch(`${url}episodes/get-one/${idEpisode}`).then(
      (res) => res.json()
    );
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

export async function getNewItemForSEO(param: {
  page: number;
  limit: number;
}): Promise<any> {
  try {
    const { data } = await fetch(
      `${url}films/get-all?page=${param.page}&&limit=${param.limit}`
    ).then((res) => res.json());
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
