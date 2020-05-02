import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem, GeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"

/**
 * Manages all requests to the API.
 * https://capi-v2.sankakucomplex.com/posts/keyset?page=1&tags=Sakimichan%20threshold:1%20-tagme%20hide_posts_in_books:in-larger-tags%20locked_rating:true%20rating:safe
https://capi-v2.sankakucomplex.com/posts/keyset?page=1&tags=threshold:1%20hide_posts_in_books:in-larger-tags%20locked_rating:true%20rating:safe&limit=60&t=1588048932.265108
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  getAllPosts(safe: boolean = true, page: number = 1, next: string = ""): Promise<Types.SankakuAPI> {

    const safe_url = `posts/keyset?page=${page}${next === "" ? "" : '&next=' + next}&tags=threshold:1%20hide_posts_in_books:in-larger-tags%20locked_rating:true%20rating:safe&limit=60`
    const url = `posts/keyset?page=${page}${next === "" ? "" : '&next=' + next}&limit=60`

    return new Promise(async (resolve, reject) => {
      this.apisauce.get(`${safe ? safe_url : url}`)
        .then(response => {
          console.log(response)
          if (!response.ok) {
            const problem = getGeneralApiProblem(response)
            if (problem) reject(problem)
          }
          return resolve(response.data as Types.SankakuAPI)
        }).catch(err => {
          return reject(err)
        })

    });
  }

  searchPost(search: string, safe: boolean = false, page: number = 1, next: string = ""): Promise<any> {
    const url = `https://capi-v2.sankakucomplex.com/posts/keyset?page=${page}${next === "" ? "" : '&next=' + next}&tags=${encodeURI(search)}&limit=60`
    const safe_url = `https://capi-v2.sankakucomplex.com/posts/keyset?page=${page}${next === "" ? "" : '&next=' + next}&tags=${encodeURI(search)}%20locked_rating:true%20rating:safe&limit=60`
    return new Promise(async (resolve, reject) => {
      this.apisauce.get(`${safe ? safe_url : url}`)
        .then(response => {
          console.log(response)
          if (!response.ok) {
            const problem = getGeneralApiProblem(response)
            if (problem) reject(problem)
          }
          return resolve(response.data)
        }).catch(err => {
          return reject(err)
        })
    });
  }
}
