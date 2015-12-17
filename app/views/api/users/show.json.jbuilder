json.partial! 'api/users/user', user: @user

json.reviews do

  json.array! @user.reviews do |review|
    json.partial! 'api/reviews/review', review: review

    json.comments do
      json.array! review.comments do |comment|
        json.partial! 'api/comments/comment', comment: comment
      end
    end

    json.toasts do
      json.array! review.toasts do |toast|
        json.partial! 'api/toasts/toast', toast: toast
      end
    end

  end

end

json.friends do

  json.array! @user.friends do |friend|
    json.partial! 'api/users/user', user: friend

    # json.friend_reviews do
    #
    #   json.partial! 'api/reviews/review', review: review
    #
    #   json.comments do
    #     json.array! review.comments do |comment|
    #       json.partial! 'api/comments/comment', comment: comment
    #     end
    #   end
    #
    #   json.toasts do
    #     json.array! review.toasts do |toast|
    #       json.partial! 'api/toasts/toast', toast: toast
    #     end
    #   end
    #
    # end

  end

end
