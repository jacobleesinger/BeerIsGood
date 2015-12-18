json.partial! 'api/beers/beer', beer: @beer

json.reviews do

  json.array! @beer.reviews do |review|
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
